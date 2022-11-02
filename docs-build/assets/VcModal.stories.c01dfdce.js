var c=Object.defineProperty;var a=(e,o)=>c(e,"name",{value:o,configurable:!0});import{t as p,i as u,b as m,g as t,e as f,r as _,f as g,u as h,d as M,o as v}from"./vue.esm-bundler.1b62fea2.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";const V={key:0,class:"modal-wrapper"},b={class:"modal__header"},S={class:"modal__content"},l={__name:"VcModal",props:{visible:{type:Boolean,required:!1,default:!1},title:{type:String,required:!1,default:""},width:{type:String,required:!1,default:"40%"}},emits:["onClose"],setup(e,{emit:o}){const i=p(e,"width"),s=u(()=>({width:i.value}));function r(){o("onClose")}return a(r,"closeModal"),(d,x)=>e.visible?(v(),m("div",V,[t("section",{class:"modal",style:g(h(s))},[t("header",b,[t("span",null,f(e.title),1),t("span",{class:"modal__close-icon",onClick:r},"\xD7")]),t("div",S,[_(d.$slots,"default",{},void 0,!0)])],4)])):M("",!0)}},n=y(l,[["__scopeId","data-v-4fb8e202"]]);l.__docgenInfo={exportName:"default",displayName:"VcModal",description:"",tags:{},props:[{name:"visible",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"title",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"width",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"40%"'}}],events:[{name:"onClose"}],slots:[{name:"default"}]};const E={parameters:{storySource:{source:`import VcModal from "../components/modal/VcModal.vue";\r
\r
export default {\r
  title: "VcModal",\r
  component: VcModal,\r
  argTypes: {\r
    visible: "Boolean",\r
    title: "String",\r
    width: "String",\r
    onClose: {},\r
  },\r
};\r
\r
const Template = (args) => ({\r
  components: { VcModal },\r
  setup() {\r
    return { args };\r
  },\r
  template: \`<VcModal v-bind='args'>\r
    <img src="https://picsum.photos/200/100" loading="lazy" />\r
        <p class="mt-2">\r
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius\r
          similique qui adipisci facilis repellat optio ut praesentium obcaecati\r
          repudiandae unde. Modi voluptatum tempore totam inventore in officia\r
          maiores repellendus nihil!\r
        </p>\r
    </VcModal>\`,\r
});\r
\r
export const ModalWithSlot = Template.bind({});\r
ModalWithSlot.args = {\r
  title: "Modal title",\r
  visible: true,\r
  width: "40%",\r
};\r
`,locationsMap:{"modal-with-slot":{startLoc:{col:17,line:14},endLoc:{col:2,line:28},startBody:{col:17,line:14},endBody:{col:2,line:28}}}}},title:"VcModal",component:n,argTypes:{visible:"Boolean",title:"String",width:"String",onClose:{}}},w=a(e=>({components:{VcModal:n},setup(){return{args:e}},template:`<VcModal v-bind='args'>
    <img src="https://picsum.photos/200/100" loading="lazy" />
        <p class="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          similique qui adipisci facilis repellat optio ut praesentium obcaecati
          repudiandae unde. Modi voluptatum tempore totam inventore in officia
          maiores repellendus nihil!
        </p>
    </VcModal>`}),"Template"),q=w.bind({});q.args={title:"Modal title",visible:!0,width:"40%"};const L=["ModalWithSlot"];export{q as ModalWithSlot,L as __namedExportsOrder,E as default};
//# sourceMappingURL=VcModal.stories.c01dfdce.js.map
