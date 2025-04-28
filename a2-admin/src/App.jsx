import { Admin, Resource, ListGuesser, radiantLightTheme, ShowGuesser, EditGuesser, radiantDarkTheme } from "react-admin";
import {PocketBaseProvider} from "./ra-pocketbase";
import UserIcon from '@mui/icons-material/People';
import { CustomerCreate, CustomerEdit, CustomerList, CustomerShow } from "./customer";
import { OrderCreate, OrderEdit, OrderList, OrderShow } from "./order";
import { ProductCreate, ProductEdit, ProductList, ProductShow } from "./product";
import { OrderedProductCreate, OrderedProductEdit, OrderedProductList, OrderedProductShow } from "./ordered_product";

const pbProvider = PocketBaseProvider("https://didactic-space-potato-4j7g6x49vxg7377rp-8090.app.github.dev/");

const App = () => (
  <Admin 
  dataProvider={pbProvider.dataProvider}
  //Login authentication
  authProvider={pbProvider.authProvider}
  //Changing themes
  lightTheme={radiantLightTheme}
  darkTheme={radiantDarkTheme}
  >
    <Resource name="Customer" list={CustomerList} show={CustomerShow} edit={CustomerEdit} create={CustomerCreate} icon={UserIcon}/>
    <Resource name="Order" list={OrderList} show={OrderShow} edit={OrderEdit} create={OrderCreate} />
    <Resource name="Product" list={ProductList} show={ProductShow} edit={ProductEdit} create={ProductCreate}/>
    <Resource name="Ordered_Product" list={OrderedProductList} show={OrderedProductShow} edit={OrderedProductEdit} create={OrderedProductCreate}/>
  </Admin>
);

export default App;
