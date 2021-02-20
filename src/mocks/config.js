import * as yup from 'yup';

const validationSchema = yup.object().shape({
    part_number: yup.string().required(),
    price: yup.number().required(),
    quantity: yup.number().required().positive().integer(),
    uom: yup.string().required(), // EA | G | M (EA = unit, G = Gramme, M = meter)
    supplier_name: yup.string().required(),
    supplier_address: yup.string().required(),
    order_date: yup.date().default(function () {
        return new Date();
    }),
    delivery_address: yup.string().required(),
});


/* Table Configuration Object

    fields: 
        - Accepts an Array of [key, value, type] arrays
        - Used for both the Table Headers and Add/Edit Forms
        
        [, , type]: 
            - Optional, will default to 'text' within form,
            - Accepts a [key, value] pair for dropdowns

    validationSchema: 
        - Yup Object used for Add/Edit form validation
    
*/

export const config = {
    fields: [
        ['part_number', 'Part Number'],
        ['price', 'Price'],
        ['quantity', 'Quantity'],
        ['uom', 'UOM', [['ea', 'EA (unit)'], ['g', 'G (gramme)'], ['m', 'M (meter)'],]],
        ['supplier_name', 'Supplier Name'],
        ['supplier_address', 'Supplier Address'],
        ['order_date', 'Order Date', 'date'],
        ['delivery_address', 'Delivery Address']
    ],
    validationSchema
};
