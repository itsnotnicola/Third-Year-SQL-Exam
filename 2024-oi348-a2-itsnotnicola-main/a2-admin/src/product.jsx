import { Datagrid, DateField, List, NumberField, ReferenceField, TextField,  Show, SimpleShowLayout,  DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const ProductList = () => (
    <List>
        <Datagrid>
            <TextField source="prod_brand" />
            <NumberField source="prod_code" />
            <TextField source="prod_name" />
            <NumberField source="prod_price" />
        </Datagrid>
    </List>
);

export const ProductShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="prod_brand" />
            <NumberField source="prod_code" />
            <TextField source="prod_name" />
            <NumberField source="prod_price" />
        </SimpleShowLayout>
    </Show>
);

export const ProductEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="prod_brand" />
            <NumberInput source="prod_code" />
            <TextInput source="prod_name" />
            <NumberInput source="prod_price" />
        </SimpleForm>
    </Edit>
);

export const ProductCreate = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="prod_brand" />
            <NumberInput source="prod_code" />
            <TextInput source="prod_name" />
            <NumberInput source="prod_price" />
        </SimpleForm>
    </Edit>
);