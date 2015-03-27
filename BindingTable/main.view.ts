declare var sap;

module TableBinding {
    export class MainView  {

        public getControllerName(): any {
            return "newuibcn.main";
        }

        public createContent(mainController: any) {

            //Creamos un json con la definición de las columnas

            var columnData = [
                {columnId: "name"},
                {columnId: "surname"},
                {columnId: "age"},
                {columnId: "city"},
                {columnId: "id"}
            ];

            //Creamos un json con el modelo de datos. Observar que el nombre de las propiedades deben de coincidir con el definido en las columnas

            var data = [
                { name: "Jordi",surname: "Vila",age: "37",city: "Barcelona",id: "1"},
                { name: "Antonio",surname: "Pérez",age: "64",city: "Madrid",id: "2"}
            ];

            //Creamos un objeto JSONModel, con dos propiedades: columns para el json de columnas y rows para el json del modelo de datos
            var model = new sap.ui.model.json.JSONModel();
            model.setData({
                columns: columnData,
                rows: data
            });

            //Definimos las propiedades de la tabla
            var table = new sap.ui.table.Table({
                title: "newuibcn Binding sample",showNoData: true,columnHeaderHeight: 10,visibleRowCount: 7
            });

            //Asginamos el modelo de datos a la tabla
            table.setModel(model);

            //Relacionamos las columnas, donde se creará un nuevo objeto sap.ui.table.column para cada columna (Binding con 'columns' del modelo)
            table.bindColumns("/columns", (id, context) => {
                var columnId = context.getObject().columnId;
                return new sap.ui.table.Column({
                    id: columnId,label: columnId,template: columnId,sortProperty: columnId,filterProperty: columnId
                });
            });

            //Hacemos el binding de las filas, a través de la propiedad rows del modelo.
            table.bindRows("/rows");

            //Devolvemos la tabla para que se inserte en el Div correspondiente
            return table;

        }

    }
}

sap.ui.jsview("newuibcn.main", new TableBinding.MainView());