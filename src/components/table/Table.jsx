import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './table.css';
import deleteButton from '../../assets/delete.png';
import deleteButton2 from '../../assets/delete2.png';
import editButton from '../../assets/edit.png';


const Users = [
    {
        id: 1,
        selected: false,
        name: "Sample File 1",
        owner: "Sincere@april.biz",
        labels: "Label 1",
        type: "PDF",
        modified: "4th April '23",

    },
    {
        id: 2,
        selected: false,
        name: "Sample File 1",
        owner: "Sincere@april.biz",
        labels: "Label 1",
        type: "PDF",
        modified: "4th April '23",

    },
    {
        id: 3,
        selected: false,
        name: "Sample File 1",
        owner: "Sincere@april.biz",
        labels: "Label 1",
        type: "PDF",
        modified: "4th April '23",

    },
];




const assignRandomLabel = () => {
    const labels = ['label 1', 'label 2', 'label 3', 'label 4', 'label 5', 'label 6'];
    return labels[Math.floor(Math.random() * labels.length)];
};





const Table = ({labelName}) => {

    let count = 0;
    const [list, setList] = useState(Users)
    const [masterChecked, setMasterChecked] = useState(false)
    const [selectedList, setSelectedList] = useState([])
    const [isChecked, setIsChecked] = useState(false);

    const [fileData, setFileData] = useState([])
    //const selectedLabelId = props.labelId;
    const getCategories = async (url) => {

        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            // setCategoryList(data[""])
            // console.log(data[0]['Labels'].length );
            console.log("table");
            console.log(data[0]);
            console.log(labelName);

            const filteredData = labelName
            ? data.filter(item => item.Label === labelName)
            : data;
            setFileData(data)

        } else {
            console.error("Error")
        }
    }
    useEffect(() => {
        getCategories("https://646312614dca1a661353d0ee.mockapi.io/api/Files");
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    // // Select/ UnSelect Table rows
    // const onMasterCheck = (e) => {
    //     let tempList = list;
    //     // Check/ UnCheck All Items
    //     tempList.map((user) => (user.selected = e.target.checked));

    //     //Update State
    //     setMasterChecked(e.target.checked)
    //     setList(tempList)
    //     setSelectedList(list.filter((e) => e.selected))

    // }

    // // Update List Item's state and Master Checkbox State
    // const onItemCheck = (e, item) => {
    //     let tempList = list;
    //     tempList.map((user) => {
    //         if (user.id === item.id) {
    //             user.selected = e.target.checked;
    //         }
    //         return user;
    //     });

    //     //To Control Master Checkbox State
    //     const totalItems = list.length;
    //     const totalCheckedItems = tempList.filter((e) => e.selected).length;

    //     // Update State
    //     setMasterChecked(totalItems === totalCheckedItems)
    //     setList(tempList)
    //     setSelectedList(list.filter((e) => e.selected))
    // }

    // // Event to get selected rows(Optional)
    // const getSelectedRows = () => {
    //     setSelectedList(list.filter((e) => e.selected))
    // }

    const handleDelete = (id) => {
        const updatedList = fileData.filter(user => user.id !== id);
        setList(updatedList);
    }
    
    const onItemCheck = (id) => {
     setIsChecked(id);
       if(id){
        count++;
        console.log(isChecked);
        console.log(count);
       }
       if(!id)
       count--;
       console.log(isChecked);
       console.log(count);
        };

        const handleCheckboxChange = (checkboxId) => {
            // setCheckboxes(prevCheckboxes =>
            //   prevCheckboxes.map(checkbox =>
            //     checkbox.id === checkboxId
            //       ? { ...checkbox, checked: !checkbox.checked }
            //       : checkbox
            //   )
            // );
          };
        
        //   const countCheckedItems = () => {
        //     return checkboxes.filter(checkbox => checkbox.checked).length;
        //   };

    return (

        <div className="container">
            <table>
                <thead>
                    <tr>
                        <th scope="col">
                            <input
                                type="checkbox"
                                className="checkboxes"
                                // checked={masterChecked}
                                id="mastercheck"
                            // onChange={(e) => onMasterCheck(e)}
                            />
                        </th>
                        <th className='headings' scope="col">NAME</th>
                        <th className='headings' scope="col">OWNER</th>
                        <th className='headings' scope="col">LABELS</th>
                        <th className='headings' scope="col">TYPE</th>
                        <th className='headings' scope="col">MODIFIED</th>
                        <th className='headings' scope="col">ACTION</th>
                    </tr>
                </thead>
                <tbody>

                    if(label is slected ) ? 
                    {fileData.map((Data) => (
                        <tr key={Data.id} className={Data.selected ? "selected" : ""}>
                            <th scope="row">
                                <input
                                    type="checkbox"
                                    checked={Data.selected}
                                    className="form-check-input"
                                    id="rowcheck{user.id}"
                                    onChange={() => handleCheckboxChange()}
                    
                                // onChange={(e) => onItemCheck(e, user)}
                                />
                            </th>
                            <td><img src={Data.file} alt='File' style={{ width: '40px', borderRadius: '100px' }} />{Data.Name}</td>
                            <td><img src={Data.Owner} alt='File' style={{ width: '40px', borderRadius: '100px' }} /></td>
                            <td>{assignRandomLabel()}</td>
                            <td>{Data.Type}</td>
                            <td>{Data.ModifietAt}</td>

                            <td className='actionButtons'>
                                <button className='editButton'>
                                    <img className='edit' src={editButton} alt='edit' />
                                </button>
                                <Popup trigger=
                                    {
                                        <button className='deleteButton'>
                                            <img className='delete' src={deleteButton} alt='delete' />
                                        </button>
                                    }
                                    position="top">
                                    <div className='popUpHeader'>
                                        <img className='deleteButton2' src={deleteButton2} alt='delete' />
                                        Remove
                                    </div>
                                    <div className='popUpBody'>
                                        <div>Are you sure</div>
                                        <button className='cancel'>X</button>
                                         <button className='confirmDelete' onClick={() => { handleDelete(Data.id) }}>Y</button>
                                    </div>
                                </Popup></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <button
                        className="btn btn-primary"
                        onClick={() => getSelectedRows()}
                    >
                        Get Selected Items {selectedList.length}
                    </button> */}
            {/* <div className="row">
                        <b>All Row Items:</b>
                        <code>{JSON.stringify(list)}</code>
                    </div>
                    <div className="row">
                        <b>Selected Row Items(Click Button To Get):</b>
                        <code>{JSON.stringify(selectedList)}</code>
                    </div> */}
        </div>
    )
}

export default Table
