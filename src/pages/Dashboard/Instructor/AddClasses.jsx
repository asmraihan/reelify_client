import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { imageUpload } from "../../../api/utils";
import { addClass } from "../../../api/classes";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const AddClasses = () => {
    const navigate = useNavigate()
    const {user}= useContext(AuthContext)
    const handleAdd = (e) => {
        e.preventDefault();
        const { name, photo, instructor, email, seats, price, details } = e.target.elements;
        //uploading image to imgbb
        imageUpload(photo.files[0]).then(data=>{
            // console.log(data.data.display_url)
            const classData = {
                name: name.value,
                instructor: instructor.value,
                email: email.value,
                seats: parseInt(seats.value),
                students: 0,
                price: parseFloat(price.value),
                description: details.value,
                createdAt: new Date().toLocaleString(),
                status: 'pending',
                photo: data.data.display_url       
            }
            console.log(classData)
            // adding class to db
            addClass(classData).then(data=>{
                console.log(data)
                if(data.acknowledged){
                    toast.success('Class added successfully')
                    navigate('/dashboard/my-classes')
                }
            })
            .catch(err=>{
                console.log(err)
            })

        }).catch(err=>{
            console.log(err)
        })


       
    }


    return (
        <div data-aos="fade-up" className="lg:p-10 mt-10 rounded-lg lg:w-5/6 mx-auto">
        <h2 className="text-3xl font-extrabold text-center">Add Class</h2>
        <form onSubmit={handleAdd} className="p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Class name" className="input input-bordered" required/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="file" name="photo" className="file-input" required/>
                </div>
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Name</span>
                    </label>
                    <input type="text" name="instructor" readOnly placeholder="Seller name" defaultValue={user?.displayName} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Email</span>
                    </label>
                    <input type="email" name="email" readOnly placeholder="Enter email" defaultValue={user?.email} className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Seats</span>
                    </label>
                    <input type="number" name="seats" placeholder="Total seat" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" name="price" placeholder="Amount in $" className="input input-bordered" required/>
                </div>
              
            </div>
            <div className="form-control mt-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <textarea name="details" className="textarea textarea-bordered resize-none" placeholder="Short description"></textarea>
                </div>

            <div className="form-control mt-10">
                <input type="submit" value="Confirm" className="btn btn-primary" />
            </div>
        </form>
        <div className="card-body">
        </div>
        
    </div>
    );
};

export default AddClasses;