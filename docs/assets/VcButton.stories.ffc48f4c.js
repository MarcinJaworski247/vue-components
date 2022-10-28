var l=Object.defineProperty;var o=(t,n)=>l(t,"name",{value:n,configurable:!0});import{b as s,e as c,n as i,o as u}from"./vue.esm-bundler.b71f79a2.js";import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";const p=["disabled"],a={__name:"VcButton",props:{text:{type:String,required:!1,default:""},disabled:{type:Boolean,required:!1,default:!1},type:{type:String,required:!1,default:"normal"}},setup(t){return(n,g)=>(u(),s("button",{disabled:t.disabled,class:i(["button",{"button--normal":t.type==="normal","button--primary":t.type==="primary","button--danger":t.type==="danger"}])},c(t.text),11,p))}},r=d(a,[["__scopeId","data-v-ca4164a9"]]);a.__docgenInfo={exportName:"default",displayName:"VcButton",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"type",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"normal"'}}]};const _={parameters:{storySource:{source:`import VcButton from "../components/button/VcButton.vue";

export default {
  title: "VcButton",
  component: VcButton,
  argTypes: {
    text: "String",
    disabled: "Boolean",
    type: {
      control: { type: "select" },
      options: ["normal", "primary", "danger"],
    },
  },
};

const Template = (args) => ({
  components: { VcButton },
  setup() {
    return { args };
  },
  template: "<VcButton v-bind='args' />",
});

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  type: "primary",
  text: "Click me!",
};

export const DangerButton = Template.bind({});
DangerButton.args = {
  type: "danger",
  text: "Click me!",
};

export const NormalButton = Template.bind({});
NormalButton.args = {
  type: "normal",
  text: "Click me!",
};
`,locationsMap:{"primary-button":{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}},"danger-button":{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}},"normal-button":{startLoc:{col:17,line:16},endLoc:{col:2,line:22},startBody:{col:17,line:16},endBody:{col:2,line:22}}}}},title:"VcButton",component:r,argTypes:{text:"String",disabled:"Boolean",type:{control:{type:"select"},options:["normal","primary","danger"]}}},e=o(t=>({components:{VcButton:r},setup(){return{args:t}},template:"<VcButton v-bind='args' />"}),"Template"),m=e.bind({});m.args={type:"primary",text:"Click me!"};const y=e.bind({});y.args={type:"danger",text:"Click me!"};const B=e.bind({});B.args={type:"normal",text:"Click me!"};const V=["PrimaryButton","DangerButton","NormalButton"];export{y as DangerButton,B as NormalButton,m as PrimaryButton,V as __namedExportsOrder,_ as default};
//# sourceMappingURL=VcButton.stories.ffc48f4c.js.map
