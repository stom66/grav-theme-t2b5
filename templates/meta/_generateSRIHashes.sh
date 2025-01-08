#!/bin/bash

themes=(
    cerulean cosmo cyborg darkly flatly journal litera lumen lux
    materia minty morph pulse quartz sandstone simplex sketchy
    slate solar spacelab superhero united vapor yeti zephyr
)

base_url="https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.3.3"
output_file="b_hashes.twig"

echo "{%" > "$output_file"
echo " set b_hashes = {" >> "$output_file"

for theme in "${themes[@]}"; do
    url="$base_url/$theme/bootstrap.min.css"
    echo "Processing $url..."
    hash=$(curl -s "$url" | sha512sum | awk '{print $1}' | xxd -r -p | base64 -w 0)
    sri_hash="sha512-$hash"
    echo "    $theme: \"$sri_hash\"," >> "$output_file"
done

echo "} %}" >> "$output_file"

echo "Hashes written to $output_file in Twig-compatible format."
