(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{pDTI:function(t,e,n){"use strict";n.r(e);n("tUrg");var o=n("q1tI"),r=n.n(o),a=n("vOnD"),i=n("quVb"),c=n("Wbzz"),l=Object(a.d)(c.a).withConfig({displayName:"tagButton__StyledLink",componentId:"glc7u7-0"})(["margin:5px 10px 5px 0;"]),d=a.d.span.withConfig({displayName:"tagButton__StyledButton",componentId:"glc7u7-1"})(["padding:5px 10px;border-radius:5px;color:",";background-color:",";font-size:15px;&:hover{text-decoration:underline;}"],(function(t){return t.theme.tag.text}),(function(t){return t.theme.tag.back})),p=function(t){var e=t.link,n=t.children;return r.a.createElement(l,{to:e},r.a.createElement(d,null,n))},u=a.d.div.withConfig({displayName:"tagList__Container",componentId:"sc-112ehaz-0"})([""]),m=function(t){var e=t.data;return r.a.createElement(u,null,e&&e.map((function(t){return r.a.createElement(p,{key:t,link:"tags/"+t},"#",t)})))},s=(n("0mN4"),n("/8Qj")),g=a.d.div.withConfig({displayName:"recentPostItem__Container",componentId:"woiway-0"})(["padding:0 10px 10px 10px;width:100%;@media all and (min-width:992px){display:",";width:25%;}"],(function(t){return t.display||"inline-block"})),h=Object(a.d)(c.a).withConfig({displayName:"recentPostItem__Cover",componentId:"woiway-1"})(["display:inline-block;margin:0 !important;width:100%;height:100px;background-image:url(",");background-size:cover;background-position:50% 50%;border-radius:10px;&:hover{text-decoration:underline #fff;}div{display:flex;flex-direction:column;justify-content:flex-end;height:100%;background-color:rgba(0,0,0,0.6);color:",";padding:10px;border-radius:inherit;p{font-weight:bold;}span{font-size:12px;}}@media all and (min-width:992px){height:120px;}"],(function(t){return t.image}),(function(t){return t.theme.recentpostitem.text})),f=function(t){var e=t.data,n=e.node.fields.slug,o=e.node.frontmatter,a=o.cover?o.cover.childImageSharp.fixed.src:"";return r.a.createElement(g,null,r.a.createElement(h,{image:a,to:n},r.a.createElement("div",null,r.a.createElement(s.a,{line:2,text:o.title}))))},x=a.d.div.withConfig({displayName:"recentPostList__PostList",componentId:"sc-1cqusp5-0"})(["#title{font-weight:bold;margin:0;padding:0 10px 10px 10px;color:",";a{color:",";&:hover{text-decoration:underline;}}}"],(function(t){return t.theme.recentpostlist.header}),(function(t){return t.theme.recentpostlist.category})),b=function(t){var e=t.category,n=t.data;return r.a.createElement(x,null,r.a.createElement("div",{id:"title"},'Recent "',r.a.createElement(c.a,{to:"/category/"+e},e),'" Posts'),n.map((function(t,e){return r.a.createElement(f,{key:e,data:t})})))},y=n("PZv5"),v=n("vrFN");n.d(e,"pageQuery",(function(){return I}));var w=a.d.div.withConfig({displayName:"blogPost__PostHeader",componentId:"sc-150fpno-0"})(["h1{padding:0;margin-bottom:10px;border:none;color:",";}hr{margin:20px 0 40px 0;background-color:",";}div{color:",";#circle{background-color:",";}}"],(function(t){return t.theme.blogpost.title}),(function(t){return t.theme.blogpost.hr}),(function(t){return t.theme.blogpost.info}),(function(t){return t.theme.blogpost.info})),k=a.d.div.withConfig({displayName:"blogPost__PostContent",componentId:"sc-150fpno-1"})(["color:",";a{color:",';&:hover{text-decoration:underline;}}.gatsby-highlight{margin:24px 0;border-radius:10px;pre[class*="language-"]{padding:10px 15px;}}blockquote{margin-left:0;margin-right:0;padding-left:calc(0.8125rem - 1px);border-left:4px solid ',";color:",";}"],(function(t){return t.theme.blogpost.content.default}),(function(t){return t.theme.blogpost.content.link}),(function(t){return t.theme.blogpost.content.quote}),(function(t){return t.theme.blogpost.content.quote})),E=a.d.div.withConfig({displayName:"blogPost__PostFooter",componentId:"sc-150fpno-2"})(["margin-top:40px;hr{margin:20px 0;background-color:",";}"],(function(t){return t.theme.blogpost.hr})),_=function(t){var e,n;function o(){return t.apply(this,arguments)||this}return n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,n=this.props.data.markdownRemark.frontmatter,o=n.title,a=n.date,c=n.category,l=n.tags,d=n.cover,p=this.props.pageContext.recent;return r.a.createElement(y.a,{location:this.props.location,title:e,activeMenu:c},r.a.createElement(v.a,{title:o,description:t.excerpt,image:!!d&&d.childImageSharp.fluid.src,keywords:l||[]}),r.a.createElement(w,null,r.a.createElement("h1",null,o),r.a.createElement(i.a,{category:c,date:a,link:!0}),r.a.createElement("hr",null)),r.a.createElement(k,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})),r.a.createElement(E,null,r.a.createElement(m,{data:l}),r.a.createElement("hr",null),c&&r.a.createElement(b,{category:c,data:p})))},o}(r.a.Component),I=(e.default=_,"1841454146")}}]);
//# sourceMappingURL=component---src-components-templates-blog-post-js-0028670fd4a8bba80e11.js.map