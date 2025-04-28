import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, Show, SimpleShowLayout, DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, SelectInput } from 'react-admin';

export const OrderedProductList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="prod_code" reference="product"/>
            <ReferenceField source="ord_num" reference="order"/>
            <NumberField source="quantity" />
        </Datagrid>
    </List>
);

export const OrderedProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="prod_code" reference="product"/>
            <ReferenceField source="ord_num" reference="order"/>
            <NumberField source="quantity" />
        </SimpleShowLayout>
    </Show>
);

export const OrderedProductEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="prod_code" reference="product"/>
            <ReferenceInput source="ord_num" reference="order"/>
            <NumberInput source="quantity" />
        </SimpleForm>
    </Edit>
);

export const OrderCreate = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="prod_code" reference="product"/>
            <ReferenceInput source="ord_num" reference="order"/>
            <NumberInput source="quantity" />
        </SimpleForm>
    </Edit>
);