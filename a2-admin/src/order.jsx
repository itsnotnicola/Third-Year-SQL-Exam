import { Datagrid, DateField, List, NumberField, ReferenceField, TextField, Show, SimpleShowLayout, DateInput, Edit, NumberInput, ReferenceInput, SimpleForm, TextInput, SelectInput } from 'react-admin';

export const OrderList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="cust_id" reference="customer"/>
            <NumberField source="ord_num" />
            <TextField source="ord_status" />
        </Datagrid>
    </List>
);

export const OrderShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="cust_id" reference="customer" />
            <NumberField source="ord_num" />
            <TextField source="ord_status" />
        </SimpleShowLayout>
    </Show>
);

export const OrderEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="cust_id" reference="customer" disabled />
            <NumberInput source="ord_num" />
            <SelectInput source="ord_status" choices={[
                { id: 'Processing', name: 'Processing' },
                { id: 'Dispatched', name: 'Dispatched' },
                { id: 'Delivered', name: 'Delivered' },
            ]} />
        </SimpleForm>
    </Edit>
);

export const OrderCreate = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="cust_id" reference="customer" />
            <NumberInput source="ord_num" />
            <SelectInput source="ord_status" choices={[
                { id: 'Processing', name: 'Processing' },
                { id: 'Dispatched', name: 'Dispatched' },
                { id: 'Delivered', name: 'Delivered' },
            ]} />
        </SimpleForm>
    </Edit>
);