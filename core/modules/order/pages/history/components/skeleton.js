/* eslint-disable no-unused-vars */
/* eslint-disable semi-style */
import Skeleton from '@common_skeleton';
import classNames from 'classnames';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const SkeletonContent = () =>
    null
    // return (
    //     <>
    //         <div className="hidden-desktop">
    //             {data.map((i) => (
    //                 <div key={i} className={styles.itemContainer}>
    //                     <div className={styles.contentItem}>
    //                         <Skeleton variant="text" width={70} height={15} animation="wave" />
    //                         <Skeleton variant="text" width={120} height={20} animation="wave" />
    //                         <div className={styles.detailItem}>
    //                             <div className={`flex flex-col ${styles.columnLabel}`}>
    //                                 <Skeleton variant="text" width="80%" height={15} animation="wave" />
    //                                 <Skeleton variant="text" width="80%" height={15} animation="wave" />
    //                                 <Skeleton variant="text" width="80%" height={15} animation="wave" />
    //                             </div>
    //                             <div className={styles.detailContent}>
    //                                 <Skeleton variant="text" width="80%" height={15} animation="wave" />
    //                                 <Skeleton variant="text" width="80%" height={15} animation="wave" />
    //                                 <Skeleton variant="text" width="80%" height={15} animation="wave" />
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //             ))}
    //         </div>
    //         <div className="hidden-mobile">
    //             {data.map((i) => (
    //                 <Skeleton key={i} variant="text" width="100%" height={30} animation="wave" />
    //             ))}
    //             {data.map((i) => (
    //                 <Skeleton key={i} variant="text" width="100%" height={30} animation="wave" />
    //             ))}
    //         </div>
    //     </>
    // );
;

const SkeletonLoader = () => {
    // return (
    //     <>
    //         <div className="hidden-mobile">
    //             <div className={styles.container}>
    //                 {data.map((i) => (
    //                     <div key={i} className={styles.itemContainer}>
    //                         <div className={styles.contentItem}>
    //                             <div className={styles.detailItem}>
    //                                 <div className={`flex flex-col ${styles.columnLabelId}`}>
    //                                     <Skeleton variant="text" width="80%" height={15} animation="wave" />
    //                                 </div>
    //                                 <div className={`flex flex-col ${styles.columnLabelDate}`}>
    //                                     <Skeleton variant="text" width="80%" height={15} animation="wave" />
    //                                 </div>
    //                                 <div className={`flex flex-col ${styles.columnLabelShipped}`}>
    //                                     <Skeleton variant="text" width="80%" height={15} animation="wave" />
    //                                 </div>
    //                                 <div className={`flex flex-col ${styles.columnLabelTotal}`}>
    //                                     <Skeleton variant="text" width="80%" height={15} animation="wave" />
    //                                 </div>
    //                                 <div className={`flex flex-col ${styles.columnLabelStatus}`}>
    //                                     <Skeleton variant="text" width="80%" height={15} animation="wave" />
    //                                 </div>
    //                                 <div className={`flex flex-col ${styles.columnLabelAction}`}>
    //                                     <Skeleton variant="text" width="80%" height={15} animation="wave" />
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //         <div className={classNames(styles.container, 'hidden-desktop')}>
    //             <SkeletonContent />
    //         </div>
    //     </>
    // );
};

export default SkeletonLoader;
