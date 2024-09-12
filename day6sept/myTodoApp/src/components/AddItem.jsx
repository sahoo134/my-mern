
import './AddItem.css'
export default function AddComponents(){
    return  <div className="row row-item ">
    <div className="col-6">
        <input type="text" className="form-control" placeholder="Username" />
    </div>
    <div className="col-4">
    <input type="date" className="form-control " />
    </div>
    <div className="col-2">
    <button type="button" className=" btn btn-danger my-btn">Add</button>
    </div>
  </div>
}