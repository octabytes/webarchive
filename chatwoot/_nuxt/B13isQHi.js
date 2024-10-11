const s=({title:o,description:n="Chatwoot is an open-source as well as cloud-based customer engagement platform. Manage all of your customer conversation channels from one place.",image:r="https://www.chatwoot.com/images/preview.png",ogTitle:i,url:a="https://www.chatwoot.com/",ogDescription:c,ogImage:m}={})=>{let t=[{name:"description",content:n},{name:"og:description",content:c||n},{name:"twitter:description",content:c||n},{name:"twitter:description",content:c||n},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:creator",content:"@chatwootapp"},{name:"og:title",content:i||o},{name:"twitter:title",content:i||o}];if(m||r){const e=r.replace("www-internal-blog","www");t=[...t,{name:"image",content:e},{name:"og:image",content:e},{name:"twitter:image",content:e}]}return a&&(t=[...t,{name:"og:url",content:a},{name:"twitter:url",content:a}]),{htmlAttrs:{lang:"en"},title:o,titleTemplate:e=>e?`${e} | Chatwoot`:"Chatwoot: Customer engagement platform. An open-source, self-hosted alternative to Intercom, Zendesk",meta:t,link:[{rel:"icon",type:"image/png",sizes:"192x192",href:"/favicon/android-icon-192x192.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon/favicon-32x32.png"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon/favicon-16x16.png"},{rel:"icon",type:"image/png",sizes:"512x512",href:"/favicon/android-chrome-192x192.png"},{rel:"canonical",href:a}]}};export{s as g};
