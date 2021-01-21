import React from "react";
import "./Sidebar2.css";
import Sidebar2Row from "./Sidebar2Row.js";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
function Sidebar2() {
  return (
    <div className="sidebar2">
      <div class="hr" />
 
      <div class="details">
        <h1>Contacts</h1>
        <SearchOutlinedIcon/>
        <MoreHorizIcon/>
      </div>
      <div class="contacts">
        <Sidebar2Row
          ImageURL="https://images.thequint.com/thequint%2F2020-12%2Fe8bc8750-27f3-42c6-b948-fbc2bcb0fe6f%2FDiljit_Dosanjh_tells_us_how_to_stay_positive_during_the_lock_down.jpg?rect=0%2C0%2C620%2C349&w=1200&auto=format%2Ccompress&ogImage=true"
          title="Diljit Dosanjh"
        />
        <Sidebar2Row
          ImageURL="https://images.indulgexpress.com/uploads/user/ckeditor_images/article/2019/10/10/2.jpg"
          title="Jackline Fernandez"
        />
        <Sidebar2Row
          ImageURL="data:image/jpeg;base64,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"
          title="Dillip Kumar Bal"
        />
        <Sidebar2Row
          ImageURL="https://i.pinimg.com/736x/5c/a9/6f/5ca96fe550aab0f2cc2768d3dee9417d.jpg"
          title="Harleen"
        />
        <Sidebar2Row
          ImageURL="https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.0-1/p120x120/80855783_10157873314004486_4183724417513160704_o.jpg?_nc_cat=1&_nc_sid=1eb0c7&_nc_ohc=hDdT_bqb4JoAX8CG3dv&_nc_ht=scontent.fhyd11-1.fna&tp=6&oh=674ff55df9e0e6ebf9cbaaf04184e964&oe=5F735E51"
          title="Ed Sheeran"
        />
        <Sidebar2Row
          ImageURL="https://scontent.fhyd11-1.fna.fbcdn.net/v/t1.0-1/p120x120/96418866_10158756322663888_5611380772293312512_o.jpg?_nc_cat=1&_nc_sid=1eb0c7&_nc_ohc=A8HMI6p_yGcAX_NRMRk&_nc_ht=scontent.fhyd11-1.fna&tp=6&oh=cbb75e2641868133ddd307ccc540a3e1&oe=5F743AE4"
          title="Justin Bieber"
        />
      </div>
    </div>
  );
}

export default Sidebar2;