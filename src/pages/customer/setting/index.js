import Layout from '@components/Layouts';
import { withTranslation } from '@i18n';
import dynamic from 'next/dynamic';

const Content = dynamic(() => import('./component'), { ssr: false });

const Page = (props) => {
    const { t } = props;
    const pageConfig = {
        title: t('customer:setting:title'),
        header: 'relative', // available values: "absolute", "relative", false (default)
        headerTitle: t('customer:setting:title'),
        bottomNav: false,
    };
    return (
        <Layout pageConfig={pageConfig} {...props}>
            <Content {...props} />
        </Layout>
    );
};

Page.getInitialProps = async () => ({
    namespacesRequired: ['common', 'customer'],
});

export default withTranslation()(Page);
