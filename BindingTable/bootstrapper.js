var TableBinding;
(function (TableBinding) {
    var Bootstrapper = (function () {
        function Bootstrapper() {
        }
        Bootstrapper.init = function () {
            sap.ui.getCore().attachInitEvent(function () {
                var view = sap.ui.view('bindingTableView', { type: sap.ui.core.mvc.ViewType.JS, viewName: "newuibcn.main" });
                view.placeAt("content");
            });
        };
        return Bootstrapper;
    })();
    TableBinding.Bootstrapper = Bootstrapper;
    Bootstrapper.init();
})(TableBinding || (TableBinding = {}));
//# sourceMappingURL=bootstrapper.js.map