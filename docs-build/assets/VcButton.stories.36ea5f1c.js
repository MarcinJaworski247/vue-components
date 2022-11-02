var l=Object.defineProperty;var r=(t,n)=>l(t,"name",{value:n,configurable:!0});import{b as s,e as c,n as i,o as u}from"./vue.esm-bundler.1b62fea2.js";import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";const p=["disabled"],o={__name:"VcButton",props:{text:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1},type:{type:String,required:!1,default:"normal"}},setup(t){return(n,g)=>(u(),s("button",{disabled:t.disabled,class:i(["button",{"button--normal":t.type==="normal","button--primary":t.type==="primary","button--danger":t.type==="danger"}])},c(t.text),11,p))}},a=d(o,[["__scopeId","data-v-f2e8e6b1"]]);o.__docgenInfo={exportName:"default",displayName:"VcButton",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"type",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"normal"'}}]};const _={parameters:{storySource:{source:`import VcButton from "../components/button/VcButton.vue";\r
\r
export default {\r
  title: "VcButton",\r
  component: VcButton,\r
  argTypes: {\r
    text: "String",\r
    disabled: "Boolean",\r
    type: {\r
      control: { type: "select" },\r
      options: ["normal", "primary", "danger"],\r
    },\r
  },\r
};\r
\r
const Template = (args) => ({\r
  components: { VcButton },\r
  setup() {\r
    return { args };\r
  },\r
  template: "<VcButton v-bind='args' />",\r
});\r
\r
export const PrimaryButton = Template.bind({});\r
PrimaryButton.args = {\r
  type: "primary",\r
  text: "Click me!",\r
};\r
\r
export const DangerButton = Template.bind({});\r
DangerButton.args = {\r
  type: "danger",\r
  text: "Click me!",\r
};\r
\r
export const NormalButton = Template.bind({});\r
NormalButton.args = {\r
  type: "normal",\r
  text: "Click me!",\r
};\r
`,locationsMap:{"primary-button":{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}},"danger-button":{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}},"normal-button":{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}}}}},title:"VcButton",component:a,argTypes:{text:"String",disabled:"Boolean",type:{control:{type:"select"},options:["normal","primary","danger"]}}},e=r(t=>({components:{VcButton:a},setup(){return{args:t}},template:"<VcButton v-bind='args' />"}),"Template"),m=e.bind({});m.args={type:"primary",text:"Click me!"};const y=e.bind({});y.args={type:"danger",text:"Click me!"};const B=e.bind({});B.args={type:"normal",text:"Click me!"};const V=["PrimaryButton","DangerButton","NormalButton"];export{y as DangerButton,B as NormalButton,m as PrimaryButton,V as __namedExportsOrder,_ as default};
//# sourceMappingURL=VcButton.stories.36ea5f1c.js.map
