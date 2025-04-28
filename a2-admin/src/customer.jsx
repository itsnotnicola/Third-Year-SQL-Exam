import { Datagrid, DateField, List, ReferenceField, TextField, Show, SimpleShowLayout, DateInput, Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CustomerList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="cust_email" />
            <TextField source="cust_fname" />
            <TextField source="cust_lname" />
            <TextField source="cust_tel" />
        </Datagrid>
    </List>
);

export const CustomerShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="cust_email" />
            <TextField source="cust_fname" />
            <TextField source="cust_lname" />
            <TextField source="cust_tel" />
        </SimpleShowLayout>
    </Show>
);

export const CustomerEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="cust_email" />
            <TextInput source="cust_fname" />
            <TextInput source="cust_lname" />
            <TextInput source="cust_tel" />
            <TextInput source="id" />
        </SimpleForm>
    </Edit>
);

export const CustomerCreate = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="cust_email" />
            <TextInput source="cust_fname" />
            <TextInput source="cust_lname" />
            <TextInput source="cust_tel" />
        </SimpleForm>
    </Edit>
);