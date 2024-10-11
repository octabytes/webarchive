# Web Archive

## Download single page with images

`httrack "http://www.example.com/" -O ./folder-to-save -v -s0  --depth=1 -n`

## Download single page without images

`httrack "http://www.example.com/" -O ./folder-to-save -r1`

## To save in current directory

To save all files in current directory use `.`

## Save/update new site

1. Download site `httrack "http://www.example.com/" -O ./temp -r1`
2. Copy folder www.example.com form temp and rename to site name e.g example
3. Remove temp folder

## Install Httrack on MacOS

`brew install httrack`
