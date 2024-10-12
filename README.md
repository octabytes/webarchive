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

## Remove href from links

1. Open your HTML file in VSCode.
2. Press Ctrl + H to bring up the Find and Replace panel.
3. Enable the Regular Expression option by clicking the .\* button (or pressing Alt + R).
4. Use the following regular expression in the Find field:`(<a[^>]*?)\s+href="[^"]*"`
5. In the Replace field, enter: `$1`
6. Click Replace All.

## Send iframe height

Add this script right after title in head

```js
<script>
    window.onload = function () {
    const height = document.body.scrollHeight;
    window.parent.postMessage(height, "*");
    };
</script>
```
