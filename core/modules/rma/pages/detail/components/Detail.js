/* eslint-disable no-unused-vars */
/* eslint-disable semi-style */
import React from 'react';
import formatDate from '@helper_date';
import Typography from '@common/Typography';

const DetailComponents = ({ detail_rma, t }) => (
    <div className="p-4 w-full">
        <div className="flex flex-col gap-2 desktop:max-w-[50%]">
            <div className="grid grid-cols-3 gap-5">
                <Typography>Status</Typography>
                <Typography className="col-span-2" variant="bd-2b">{detail_rma?.status?.name}</Typography>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <Typography>{t('rma:view:orderDate')}</Typography>
                <Typography className="col-span-2" variant="bd-2b">{formatDate(detail_rma.order_date)}</Typography>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <Typography>Order</Typography>
                <Typography className="col-span-2" variant="bd-2b">{`#${detail_rma.order_number}`}</Typography>
            </div>
            <div className="grid grid-cols-3 gap-5">
                <Typography>{t('rma:view:myAddress')}</Typography>
                <Typography className="col-span-2" variant="bd-2b">
                    {detail_rma.customer_address.firstname || ''}
                    <br />
                    {detail_rma.customer_address.street || ''}
                    <br />
                    {detail_rma.customer_address.city || ''}
                    <br />
                    {detail_rma.customer_address.region || ''}
                    <br />
                    {detail_rma.customer_address.country_id || ''}
                    {detail_rma.customer_address.telephone || ''}
                    <br />
                    {detail_rma.customer_address.postcode || ''}
                </Typography>
            </div>
        </div>
    </div>
);

export default DetailComponents;
