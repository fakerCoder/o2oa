MWF.xApplication.process.FormDesigner.Module = MWF.xApplication.process.FormDesigner.Module || {};
MWF.xDesktop.requireApp("process.FormDesigner", "Module.$Element", null, false);
MWF.xApplication.process.FormDesigner.Module.Select = MWF.FCSelect = new Class({
	Extends: MWF.FC$Element,
	Implements: [Options, Events],
	options: {
		"style": "default",
		"propertyPath": "/x_component_process_FormDesigner/Module/Select/select.html"
	},
	
	initialize: function(form, options){
		this.setOptions(options);
		
		this.path = "/x_component_process_FormDesigner/Module/Select/";
		this.cssPath = "/x_component_process_FormDesigner/Module/Select/"+this.options.style+"/css.wcss";

		this._loadCss();
		this.moduleType = "element";
		this.moduleName = "select";
		
		this.form = form;
		this.container = null;
		this.containerNode = null;
	},
	
	_createMoveNode: function(){
		this.moveNode = new Element("div", {
			"MWFType": "select",
			"styles": this.css.moduleNodeMove,
			"id": this.json.id,
			"events": {
				"selectstart": function(){
					return false;
				}
			}
		}).inject(this.form.container);
		var icon = new Element("div", {
			"styles": this.css.selectIcon
		}).inject(this.moveNode);
		var text = new Element("div", {
			"styles": this.css.moduleText,
			"text": this.json.id
		}).inject(this.moveNode);
	},
	_loadNodeStyles: function(){
		var icon = this.node.getFirst("div");
		var text = this.node.getLast("div");
		icon.setStyles(this.css.selectIcon);
		text.setStyles(this.css.moduleText);
	},
	
	_getCopyNode: function(){
		if (!this.copyNode) this._createCopyNode();
		this.copyNode.setStyle("display", "inline-block");
		return this.copyNode;
	},
	
	_setEditStyle_custom: function(name){
        if (name=="styles"){
            if (this.parentContainer){
                if (this.parentContainer.moduleName == "datagrid$Data"){
                    if (!this.json.styles.width) this.json.styles.width = "90%";
                }
            }
            this.setCustomStyles();
        }
		if (name=="id"){
			this.node.getLast().set("text", this.json.id);
		}
	}
	
});
