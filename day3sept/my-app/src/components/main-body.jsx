
import 'bootstrap/dist/css/bootstrap.min.css';

function MainBody(){
   return(
    <>
    <p>hollo how are you doing</p>
    <button type="button" class="btn btn-primary">Primary Button </button>
    <button type="button" class="btn btn-secondary">Secondary  Button</button>
    <div class="alert alert-success" role="alert">
    This is a success alert!
</div>

<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-pills card-header-pills">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    

    </>
   )
}

export default MainBody;