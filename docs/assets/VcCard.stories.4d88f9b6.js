var r=Object.defineProperty;var i=(e,a)=>r(e,"name",{value:a,configurable:!0});import{b as d,g as t,e as n,n as c,o as m}from"./vue.esm-bundler.b71f79a2.js";import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";const p={class:"card__image"},g=["src","alt"],f={class:"px-2"},_={class:"card__title"},S={class:"card__subtitle"},y={class:"card__content"},o={__name:"VcCard",props:{wide:{type:Boolean,required:!1,default:!1},img:{type:String,required:!1,default:"src/assets/img-placeholder.jpg"},imgAlt:{type:String,required:!1,default:""},title:{type:String,required:!1,default:""},subtitle:{type:String,required:!1,default:""},content:{type:String,required:!1,default:""}},setup(e){return(a,C)=>(m(),d("article",{class:c(["card",{"card--wide":e.wide}])},[t("div",p,[t("img",{src:e.img,alt:e.imgAlt,loading:"lazy"},null,8,g)]),t("div",f,[t("header",null,[t("h2",_,n(e.title),1),t("span",S,n(e.subtitle),1)]),t("div",y,n(e.content),1)])],2))}},l=u(o,[["__scopeId","data-v-eaa5dc91"]]);o.__docgenInfo={exportName:"default",displayName:"VcCard",description:"",tags:{},props:[{name:"wide",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"img",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"src/assets/img-placeholder.jpg"'}},{name:"imgAlt",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"title",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"subtitle",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"content",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}]};const w={parameters:{storySource:{source:`import VcCard from "../components/card/VcCard.vue";

export default {
  title: "VcCard",
  component: VcCard,
  argTypes: {
    wide: "Boolean",
    img: "String",
    imgAlt: "String",
    title: "String",
    subtitle: "String",
    content: "String",
  },
};

const Template = (args) => ({
  components: { VcCard },
  setup() {
    return { args };
  },
  template: "<VcCard v-bind='args' />",
});

export const NormalCard = Template.bind({});
NormalCard.args = {
  wide: false,
  img: "https://picsum.photos/400/200",
  title: "Some title",
  subtitle: "Some subtitle",
  imgAlt: "Some random photo",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnidolorum odit.",
};

export const WideCard = Template.bind({});
WideCard.args = {
  wide: true,
  img: "https://picsum.photos/200/300",
  title: "Some title",
  subtitle: "Some subtitle",
  imgAlt: "Some random photo",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnidolorum odit.",
};
`,locationsMap:{"normal-card":{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}},"wide-card":{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}}}}},title:"VcCard",component:l,argTypes:{wide:"Boolean",img:"String",imgAlt:"String",title:"String",subtitle:"String",content:"String"}},s=i(e=>({components:{VcCard:l},setup(){return{args:e}},template:"<VcCard v-bind='args' />"}),"Template"),h=s.bind({});h.args={wide:!1,img:"https://picsum.photos/400/200",title:"Some title",subtitle:"Some subtitle",imgAlt:"Some random photo",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnidolorum odit."};const b=s.bind({});b.args={wide:!0,img:"https://picsum.photos/200/300",title:"Some title",subtitle:"Some subtitle",imgAlt:"Some random photo",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnidolorum odit."};const x=["NormalCard","WideCard"];export{h as NormalCard,b as WideCard,x as __namedExportsOrder,w as default};
//# sourceMappingURL=VcCard.stories.4d88f9b6.js.map
