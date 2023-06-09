import React from 'react';

const ClassRow = ({singleClass, index}) => {
    return (
        <tr>
        <th>
            {index+1}
        </th>
        <td>
            <div className="flex items-center space-x-3">
                <div className="avatar">
                    <div className="mask mask-parallelogram-2 w-16 h-16">
                        <img src={singleClass?.photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
                <div>
                    <div className="font-bold">{singleClass?.name}</div>
                
                </div>
            </div>
        </td>
        <td>
        Name: {singleClass?.instructor}
            <br />
            Email: <span className="badge badge-base-300 badge-sm"> {singleClass?.email}</span>
        </td>
        <td>{singleClass?.seats}</td>
        <td>${singleClass?.price}</td>
        <td className="">{singleClass?.status}</td>
        <td>
            <button className="btn bg-primary text-white btn-xs">Approve</button>
        </td>
        <td>
            <button className="btn bg-error text-white btn-xs">Deny</button>
        </td>
        <td>
            <button className="btn bg-info text-white btn-xs">Feedback</button>
        </td>
    </tr>
    );
};

export default ClassRow;