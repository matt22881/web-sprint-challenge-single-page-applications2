import * as yup from 'yup'

export default yup.object().shape({
    size: yup
        .string()
        .oneOf(['sm', 'md', 'lg', 'xl'],'You have to make a size selection'),
    sauce: yup
        .string()
        .oneOf(['orig', 'gar', 'bbq', 'alf', 'dry'], 'You have to make a sauce selection'),
    gluFre: yup.boolean(),
    pep: yup.boolean(),
    saus: yup.boolean(),
    canBac: yup.boolean(),
    spiSaus: yup.boolean(),
    chix: yup.boolean(),
    oni: yup.boolean(),
    grnPep: yup.boolean(),
    tom: yup.boolean(),
    oliv: yup.boolean(),
    rstGar: yup.boolean(),
    artHrt: yup.boolean(),
    chz3: yup.boolean(),
    pine: yup.boolean(),
    xtra: yup.boolean(),
    spec: yup.string(),
    cname: yup
        .string()
        .required('You have to have a name')
        .min(3, 'Your name must be longer than 2 characters'),
    qty: yup.string(),
})