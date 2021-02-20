import * as yup from 'yup';

const validationSchema = yup.object().shape({
    part_number: yup.string().required(),
    quantity: yup.number().required().positive().integer(),
    uom: yup.string().required(), // EA | G | M (EA = unit, G = Gramme, M = meter)
    supplier_name: yup.string().required(),
    supplier_address: yup.string().required(),
    order_date: yup.date().default(function () {
        return new Date();
    }),
    delivery_address: yup.string().required(),
});

export const config = {
    fields: [
        'part_number',
        'price',
        'quantity',
        'uom',
        'supplier_name',
        'supplier_address',
        'order_date',
        'delivery_address'
    ],
    validationSchema
};
