declare var sap;

module TableBinding {
    
    export class Bootstrapper {
        
        public static init() {

            sap.ui.getCore().attachInitEvent(() => {
            
                var view = sap.ui.view('bindingTableView', { type: sap.ui.core.mvc.ViewType.JS, viewName: "newuibcn.main" });
                view.placeAt("content");    
            });

        }
    }

    Bootstrapper.init();
}
