let data = [];
        const addnote = () => {
            let name = document.getElementById('title').value;
            let note = document.getElementById('note').value;
            if (!name || !note) {
                alert(`Title & Note Required`);
                return false;
            }
            let obj = {
                name, note,
                id: Math.floor(Math.random() * 1000),
            }
            data.push(obj);
            if (localStorage.getItem('note') == null || localStorage.getItem('note') == undefined) {
                localStorage.setItem('note', JSON.stringify(data))
            }
            else {
                let old = JSON.parse(localStorage.getItem('note'));
                old.push(obj);
                localStorage.setItem('note', JSON.stringify(old));
            }

            shownote();
            document.getElementById('title').value = ""
            document.getElementById('note').value = ""
        }
        const shownote = () => {
            let old = JSON.parse(localStorage.getItem('note')) ? JSON.parse(localStorage.getItem('note')) : [];
            let tbl = "";
            old.map((item) => {
                return tbl += `
                            <div class="col-12 mt-2">
                                <div class="box-1 p-2 ">
                                    <h3>${item.name}</h3>
                                    <p>${item.note}</p>
                                    <button type="submit"onclick="deletnote(${item.id})"class="addbtn-1"><i class="fa-solid fa-trash"></i></button>
                                </div>                                
                            </div>
                        `
            });
            document.getElementById('notes').innerHTML = tbl;
        }
        const deletnote = (id) => {
            let old = JSON.parse(localStorage.getItem('note'));
            let deletedata = old.filter((val) => {
                return val.id != id;
            });
            data.push(deletedata)
            localStorage.setItem('note', JSON.stringify(deletedata));
            alert(`Notes Delete Succesfullly`)
            shownote()
        }
