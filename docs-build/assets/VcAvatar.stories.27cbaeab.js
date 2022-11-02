var v=Object.defineProperty;var s=(a,r)=>v(a,"name",{value:r,configurable:!0});import{t as l,a as f,b as n,d as c,e as A,n as S,f as y,u as b,o}from"./vue.esm-bundler.1b62fea2.js";import{_ as h}from"./_plugin-vue_export-helper.cdc0426e.js";const C=["src","alt"],z={key:1,class:"avatar__initials"},d={__name:"VcAvatar",props:{img:{type:String,required:!1,default:"src/assets/avatar-placeholder.png"},imgAlt:{type:String,required:!1,default:"Avatar photo"},initials:{type:String,required:!1,default:""},size:{type:String,required:!1,default:"small"},borderColor:{type:String,required:!1,default:""},backgroundColor:{type:String,required:!1,default:"#fff"},textColor:{type:String,required:!1,default:"inherit"}},setup(a){const r=a,i=l(r,"borderColor"),u=l(r,"backgroundColor"),g=l(r,"textColor"),p=f(()=>{let t={};return i.value&&(t.border=`2px solid ${i.value}`),t.backgroundColor=u.value,t.color=g.value,t});return(t,k)=>(o(),n("div",{class:S(["avatar",{"avatar--small":a.size==="small","avatar--medium":a.size==="medium","avatar--large":a.size==="large"}]),style:y(b(p))},[a.initials?c("",!0):(o(),n("img",{key:0,src:a.img,alt:a.imgAlt,class:"avatar__img"},null,8,C)),a.initials?(o(),n("span",z,A(a.initials.slice(0,2).toUpperCase()),1)):c("",!0)],6))}},m=h(d,[["__scopeId","data-v-6037f41e"]]);d.__docgenInfo={exportName:"default",displayName:"VcAvatar",description:"",tags:{},props:[{name:"img",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"src/assets/avatar-placeholder.png"'}},{name:"imgAlt",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"Avatar photo"'}},{name:"initials",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"size",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"small"'}},{name:"borderColor",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"backgroundColor",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"#fff"'}},{name:"textColor",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"inherit"'}}]};const I={parameters:{storySource:{source:`import VcAvatar from "../components/avatar/VcAvatar.vue";\r
\r
export default {\r
  title: "VcAvatar",\r
  component: VcAvatar,\r
  argTypes: {\r
    img: "String",\r
    imgAlt: "String",\r
    initials: "String",\r
    size: "String",\r
    borderColor: "String",\r
    textColor: "String",\r
    backgroundColor: "String",\r
  },\r
};\r
\r
const Template = (args) => ({\r
  components: { VcAvatar },\r
  setup() {\r
    return { args };\r
  },\r
  template: "<VcAvatar v-bind='args' />",\r
});\r
\r
export const SmallDefaultAvatar = Template.bind({});\r
SmallDefaultAvatar.args = {\r
  size: "small",\r
};\r
\r
export const SmallAvatar = Template.bind({});\r
SmallAvatar.args = {\r
  size: "small",\r
  img: "https://picsum.photos/400",\r
};\r
\r
export const SmallAvatarWithBorder = Template.bind({});\r
SmallAvatarWithBorder.args = {\r
  size: "small",\r
  img: "https://picsum.photos/400",\r
  borderColor: "green",\r
};\r
\r
export const SmallAvatarWithInitials = Template.bind({});\r
SmallAvatarWithInitials.args = {\r
  size: "small",\r
  initials: "MJ",\r
  backgroundColor: "#ade4e4",\r
  borderColor: "#127676",\r
};\r
\r
export const MediumAvatar = Template.bind({});\r
MediumAvatar.args = {\r
  size: "medium",\r
  img: "https://picsum.photos/400",\r
};\r
\r
export const LargeAvatar = Template.bind({});\r
LargeAvatar.args = {\r
  size: "large",\r
  img: "https://picsum.photos/200",\r
};\r
`,locationsMap:{"small-default-avatar":{startLoc:{col:17,line:17},endLoc:{col:2,line:23},startBody:{col:17,line:17},endBody:{col:2,line:23}},"small-avatar":{startLoc:{col:17,line:17},endLoc:{col:2,line:23},startBody:{col:17,line:17},endBody:{col:2,line:23}},"small-avatar-with-border":{startLoc:{col:17,line:17},endLoc:{col:2,line:23},startBody:{col:17,line:17},endBody:{col:2,line:23}},"small-avatar-with-initials":{startLoc:{col:17,line:17},endLoc:{col:2,line:23},startBody:{col:17,line:17},endBody:{col:2,line:23}},"medium-avatar":{startLoc:{col:17,line:17},endLoc:{col:2,line:23},startBody:{col:17,line:17},endBody:{col:2,line:23}},"large-avatar":{startLoc:{col:17,line:17},endLoc:{col:2,line:23},startBody:{col:17,line:17},endBody:{col:2,line:23}}}}},title:"VcAvatar",component:m,argTypes:{img:"String",imgAlt:"String",initials:"String",size:"String",borderColor:"String",textColor:"String",backgroundColor:"String"}},e=s(a=>({components:{VcAvatar:m},setup(){return{args:a}},template:"<VcAvatar v-bind='args' />"}),"Template"),V=e.bind({});V.args={size:"small"};const x=e.bind({});x.args={size:"small",img:"https://picsum.photos/400"};const B=e.bind({});B.args={size:"small",img:"https://picsum.photos/400",borderColor:"green"};const _=e.bind({});_.args={size:"small",initials:"MJ",backgroundColor:"#ade4e4",borderColor:"#127676"};const L=e.bind({});L.args={size:"medium",img:"https://picsum.photos/400"};const q=e.bind({});q.args={size:"large",img:"https://picsum.photos/200"};const D=["SmallDefaultAvatar","SmallAvatar","SmallAvatarWithBorder","SmallAvatarWithInitials","MediumAvatar","LargeAvatar"];export{q as LargeAvatar,L as MediumAvatar,x as SmallAvatar,B as SmallAvatarWithBorder,_ as SmallAvatarWithInitials,V as SmallDefaultAvatar,D as __namedExportsOrder,I as default};
//# sourceMappingURL=VcAvatar.stories.27cbaeab.js.map
