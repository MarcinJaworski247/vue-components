var s=Object.defineProperty;var a=(e,n)=>s(e,"name",{value:n,configurable:!0});import{b as d,g as t,e as r,n as c,o as m}from"./vue.esm-bundler.b71f79a2.js";import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";const p={class:"card__image"},g=["src","alt"],f={class:"px-2"},_={class:"card__title"},S={class:"card__subtitle"},b={class:"card__content"},i={__name:"VcCard",props:{wide:{type:Boolean,required:!1,default:!1},img:{type:String,required:!1,default:"src/assets/img-placeholder.jpg"},imgAlt:{type:String,required:!1,default:""},title:{type:String,required:!1,default:""},subtitle:{type:String,required:!1,default:""},content:{type:String,required:!1,default:""}},setup(e){return(n,C)=>(m(),d("article",{class:c(["card",{"card--wide":e.wide}])},[t("div",p,[t("img",{src:e.img,alt:e.imgAlt,loading:"lazy"},null,8,g)]),t("div",f,[t("header",null,[t("h2",_,r(e.title),1),t("span",S,r(e.subtitle),1)]),t("div",b,r(e.content),1)])],2))}},o=u(i,[["__scopeId","data-v-53fb2641"]]);i.__docgenInfo={exportName:"default",displayName:"VcCard",description:"",tags:{},props:[{name:"wide",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"img",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"src/assets/img-placeholder.jpg"'}},{name:"imgAlt",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"title",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"subtitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"content",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}]};const w={parameters:{storySource:{source:`import VcCard from "../components/card/VcCard.vue";\r
\r
export default {\r
  title: "VcCard",\r
  component: VcCard,\r
  argTypes: {\r
    wide: "Boolean",\r
    img: "String",\r
    imgAlt: "String",\r
    title: "String",\r
    subtitle: "String",\r
    content: "String",\r
  },\r
};\r
\r
const Template = (args) => ({\r
  components: { VcCard },\r
  setup() {\r
    return { args };\r
  },\r
  template: "<VcCard v-bind='args' />",\r
});\r
\r
export const NormalCard = Template.bind({});\r
NormalCard.args = {\r
  wide: false,\r
  img: "https://picsum.photos/400/200",\r
  title: "Some title",\r
  subtitle: "Some subtitle",\r
  imgAlt: "Some random photo",\r
  content:\r
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnidolorum odit.",\r
};\r
\r
export const WideCard = Template.bind({});\r
WideCard.args = {\r
  wide: true,\r
  img: "https://picsum.photos/200/300",\r
  title: "Some title",\r
  subtitle: "Some subtitle",\r
  imgAlt: "Some random photo",\r
  content:\r
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnidolorum odit.",\r
};\r
`,locationsMap:{"normal-card":{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}},"wide-card":{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}}}}},title:"VcCard",component:o,argTypes:{wide:"Boolean",img:"String",imgAlt:"String",title:"String",subtitle:"String",content:"String"}},l=a(e=>({components:{VcCard:o},setup(){return{args:e}},template:"<VcCard v-bind='args' />"}),"Template"),y=l.bind({});y.args={wide:!1,img:"https://picsum.photos/400/200",title:"Some title",subtitle:"Some subtitle",imgAlt:"Some random photo",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnidolorum odit."};const h=l.bind({});h.args={wide:!0,img:"https://picsum.photos/200/300",title:"Some title",subtitle:"Some subtitle",imgAlt:"Some random photo",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnidolorum odit."};const x=["NormalCard","WideCard"];export{y as NormalCard,h as WideCard,x as __namedExportsOrder,w as default};
//# sourceMappingURL=VcCard.stories.77d06aa8.js.map
