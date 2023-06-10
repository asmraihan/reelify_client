import { useParams } from 'react-router-dom';

const PaymentPage = () => {
//   const location = useLocation()
//   const classData = location.pathname.split('/').pop()
    const data = useParams()
    const classData = data.classId
  console.log(classData)
    return (
        <div>
            this payment page for : {classData}
        </div>
    );
};

export default PaymentPage;