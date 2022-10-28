var f=Object.defineProperty;var n=(e,a)=>f(e,"name",{value:a,configurable:!0});import{t as r,a as p,b as c,i as T,e as v,d as b,f as y,u as x,o as s}from"./vue.esm-bundler.b71f79a2.js";import{_}from"./_plugin-vue_export-helper.cdc0426e.js";const d={__name:"VcTag",props:{text:{type:String,required:!0},color:{type:String,required:!1,default:"#1971c2"},filled:{type:Boolean,required:!1,default:!1},removable:{type:Boolean,required:!1,default:!1}},emits:["onRemove"],setup(e,{emit:a}){const l=e,o=r(l,"color"),g=r(l,"filled"),m=p(()=>g.value?{color:"#fff",backgroundColor:o.value,borderColor:o.value}:{color:o.value,borderColor:o.value});function u(){a("onRemove")}return n(u,"onRemove"),(R,q)=>(s(),c("div",{class:"tag",style:y(x(m))},[T(v(e.text)+" ",1),e.removable?(s(),c("div",{key:0,onClick:u,class:"ml-1 tag__close"}," \u2716 ")):b("",!0)],4))}},i=_(d,[["__scopeId","data-v-29cee2cc"]]);d.__docgenInfo={exportName:"default",displayName:"VcTag",description:"",tags:{},props:[{name:"text",type:{name:"string"},required:!0},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"#1971c2"'}},{name:"filled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"removable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"onRemove"}]};const F={parameters:{storySource:{source:`import VcTag from "../components/tag/VcTag.vue";

export default {
  title: "VcTag",
  component: VcTag,
  argTypes: {
    text: "String",
    color: "String",
    filled: "Boolean",
    removable: "Boolean",
  },
};

const Template = (args) => ({
  components: { VcTag },
  setup() {
    return { args };
  },
  template: "<VcTag v-bind='args' />",
});

export const DefaultTag = Template.bind({});
DefaultTag.args = {
  text: "Some tag",
};

export const ColoredTag = Template.bind({});
ColoredTag.args = {
  text: "Some tag",
  color: "green",
};

export const FilledTag = Template.bind({});
FilledTag.args = {
  text: "Some tag",
  color: "green",
  filled: true,
};

export const RemovableTag = Template.bind({});
RemovableTag.args = {
  text: "Some tag",
  removable: true,
};
`,locationsMap:{"default-tag":{startLoc:{col:17,line:14},endLoc:{col:2,line:20},startBody:{col:17,line:14},endBody:{col:2,line:20}},"colored-tag":{startLoc:{col:17,line:14},endLoc:{col:2,line:20},startBody:{col:17,line:14},endBody:{col:2,line:20}},"filled-tag":{startLoc:{col:17,line:14},endLoc:{col:2,line:20},startBody:{col:17,line:14},endBody:{col:2,line:20}},"removable-tag":{startLoc:{col:17,line:14},endLoc:{col:2,line:20},startBody:{col:17,line:14},endBody:{col:2,line:20}}}}},title:"VcTag",component:i,argTypes:{text:"String",color:"String",filled:"Boolean",removable:"Boolean"}},t=n(e=>({components:{VcTag:i},setup(){return{args:e}},template:"<VcTag v-bind='args' />"}),"Template"),V=t.bind({});V.args={text:"Some tag"};const S=t.bind({});S.args={text:"Some tag",color:"green"};const B=t.bind({});B.args={text:"Some tag",color:"green",filled:!0};const C=t.bind({});C.args={text:"Some tag",removable:!0};const N=["DefaultTag","ColoredTag","FilledTag","RemovableTag"];export{S as ColoredTag,V as DefaultTag,B as FilledTag,C as RemovableTag,N as __namedExportsOrder,F as default};
//# sourceMappingURL=VcTag.stories.752b7071.js.map
