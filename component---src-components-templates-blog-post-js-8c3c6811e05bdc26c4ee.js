(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/8Qj":function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("vOnD").d.p.withConfig({displayName:"textEllipsis__StyledText",componentId:"sc-olu11s-0"})(["overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:",";-webkit-box-orient:vertical;word-wrap:break-word;line-height:24px;height:","px;margin-bottom:5px;color:inherit;"],(function(e){return e.line||1}),(function(e){return 24*e.line||24}));t.a=function(e){var t=e.text,n=e.line,o=e.color;return a.a.createElement(r,{line:n,color:o},t)}},pDTI:function(e,t,n){"use strict";n.r(t);var o=n("dI71"),a=n("q1tI"),r=n.n(a),i=n("vOnD"),l=n("quVb"),c=n("Wbzz"),d=Object(i.d)(c.a).withConfig({displayName:"tagButton__StyledLink",componentId:"sc-glc7u7-0"})(["margin:5px 10px 5px 0;"]),p=i.d.span.withConfig({displayName:"tagButton__StyledButton",componentId:"sc-glc7u7-1"})(["padding:5px 10px;border-radius:5px;color:",";background-color:",";font-size:15px;&:hover{text-decoration:underline;}"],(function(e){return e.theme.tag.text}),(function(e){return e.theme.tag.back})),u=function(e){var t=e.link,n=e.children;return r.a.createElement(d,{to:t},r.a.createElement(p,null,n))},s=i.d.div.withConfig({displayName:"tagList__Container",componentId:"sc-112ehaz-0"})([""]),m=function(e){var t=e.data;return r.a.createElement(s,null,t&&t.map((function(e){return r.a.createElement(u,{key:e,link:"tags/"+e},"#",e)})))},g=n("/8Qj"),h=i.d.div.withConfig({displayName:"recentPostItem__Container",componentId:"sc-woiway-0"})(["padding:0 10px 10px 10px;width:100%;@media all and (min-width:992px){display:",";width:25%;}"],(function(e){return e.display||"inline-block"})),f=Object(i.d)(c.a).withConfig({displayName:"recentPostItem__Cover",componentId:"sc-woiway-1"})(["display:inline-block;margin:0 !important;width:100%;height:100px;background-image:url(",");background-size:cover;background-position:50% 50%;border-radius:10px;&:hover{text-decoration:underline #fff;}div{display:flex;flex-direction:column;justify-content:flex-end;height:100%;background-color:rgba(0,0,0,0.6);color:",";padding:10px;border-radius:inherit;p{font-weight:bold;}span{font-size:12px;}}@media all and (min-width:992px){height:120px;}"],(function(e){return e.image}),(function(e){return e.theme.recentpostitem.text})),x=function(e){var t=e.data,n=t.node.fields.slug,o=t.node.frontmatter,a=o.cover?o.cover.childImageSharp.fixed.src:"";return r.a.createElement(h,null,r.a.createElement(f,{image:a,to:n},r.a.createElement("div",null,r.a.createElement(g.a,{line:2,text:o.title}),r.a.createElement("span",null,o.date))))},b=i.d.div.withConfig({displayName:"recentPostList__PostList",componentId:"sc-1cqusp5-0"})(["#title{font-weight:bold;margin:0;padding:0 10px 10px 10px;color:",";a{color:",";&:hover{text-decoration:underline;}}}"],(function(e){return e.theme.recentpostlist.header}),(function(e){return e.theme.recentpostlist.category})),v=function(e){var t=e.category,n=e.data;return r.a.createElement(b,null,r.a.createElement("div",{id:"title"},'Recent "',r.a.createElement(c.a,{to:"/category/"+t},t),'" Posts'),n.map((function(e,t){return r.a.createElement(x,{key:t,data:e})})))},w=n("PZv5"),y=n("vrFN"),E=i.d.div.withConfig({displayName:"blogPost__PostHeader",componentId:"sc-150fpno-0"})(["h1{padding:0;margin-bottom:10px;border:none;color:",";}hr{margin:20px 0 40px 0;background-color:",";}div{color:",";#circle{background-color:",";}}"],(function(e){return e.theme.blogpost.title}),(function(e){return e.theme.blogpost.hr}),(function(e){return e.theme.blogpost.info}),(function(e){return e.theme.blogpost.info})),k=i.d.div.withConfig({displayName:"blogPost__PostContent",componentId:"sc-150fpno-1"})(["color:",";a{color:",';&:hover{text-decoration:underline;}}.gatsby-highlight{margin:24px 0;border-radius:10px;pre[class*="language-"]{padding:10px 15px;}}blockquote{margin-left:0;margin-right:0;padding-left:calc(0.8125rem - 1px);border-left:4px solid ',";color:",";}"],(function(e){return e.theme.blogpost.content.default}),(function(e){return e.theme.blogpost.content.link}),(function(e){return e.theme.blogpost.content.quote}),(function(e){return e.theme.blogpost.content.quote})),_=i.d.div.withConfig({displayName:"blogPost__PostFooter",componentId:"sc-150fpno-2"})(["margin-top:40px;hr{margin:20px 0;background-color:",";}"],(function(e){return e.theme.blogpost.hr})),I=function(e){function t(){return e.apply(this,arguments)||this}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,n=this.props.data.markdownRemark.frontmatter,o=n.title,a=n.date,i=n.category,c=n.tags,d=n.cover,p=this.props.pageContext.recent;return r.a.createElement(w.a,{location:this.props.location,title:t,activeMenu:i},r.a.createElement(y.a,{title:o,description:e.excerpt,image:!!d&&d.childImageSharp.fluid.src,keywords:c||[]}),r.a.createElement(E,null,r.a.createElement("h1",null,o),r.a.createElement(l.a,{category:i,date:a,link:!0}),r.a.createElement("hr",null)),r.a.createElement(k,null,r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),r.a.createElement(_,null,r.a.createElement(m,{data:c}),r.a.createElement("hr",null),i&&r.a.createElement(v,{category:i,data:p})))},t}(r.a.Component);t.default=I},quVb:function(e,t,n){"use strict";var o=n("q1tI"),a=n.n(o),r=n("vOnD"),i=n("Wbzz"),l=n("3r1a"),c=r.d.div.withConfig({displayName:"postInfo__Container",componentId:"sc-1l1nte-0"})(["font-size:",";span{vertical-align:middle;}a{color:inherit;vertical-align:middle;&:hover{text-decoration:underline;}}div{margin:0 10px;}"],(function(e){return e.size?e.size+"px":"13px"}));t.a=function(e){var t=e.category,n=e.date,r=e.size,d=e.link;return a.a.createElement(c,{size:r},t&&a.a.createElement(o.Fragment,null,d?a.a.createElement(i.a,{to:"/category/"+t},t):a.a.createElement("span",null,t),a.a.createElement(l.a,{size:"3"})),a.a.createElement("span",null,n))}}}]);
//# sourceMappingURL=component---src-components-templates-blog-post-js-8c3c6811e05bdc26c4ee.js.map