import React, {useEffect, useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import MaterialTable, {MTableToolbar} from '@material-table/core';
import MovieDataService from "../../services/movie.service";







const columns = [
  {
    title: 'Actor Name',
    field: 'movieName',
  },
  {
    title: 'Actor',
    field: 'actor',
  },
  {
    title: 'Price',
    field: 'price',
    
  },
  {
    title: 'Description',
    field: 'description',
    
  },
  {
    title: 'Date',
    field: 'date',
  }

];


const time = 500;





export default function ActorsList(props){
  
  
  const [data, setData]= useState([]);
  
  console.log(props);

 
  // const [openAlert, setOpenalert] = useState([true]);
  // const [alertMsg, setAlertMsg] = useState([""]);
 
  useEffect(()=>{
    MovieDataService.getAll().then(resp=>resp.data).then( resp =>{
      console.log(resp);
      setData(resp.data);
    }); 
  },[])
  
  // const alertHandler = (data) =>{
        
  //   show = true;
  //   msgShow = ({
  //     title: data.title,
  //     msg: data.msg
  //   })
  // }

  

  
  
  

    return (
      <><Container>
          <Row>
            <Col>
           
            </Col>
          </Row>
          <Row>
          <Col>
            <MaterialTable
              title="Actor List"
              columns={columns}
              data={data}
              components={{
                Toolbar: props => (
                    <div style={{ backgroundColor: '#e8eaf5' }}>
                        <MTableToolbar {...props} />
                    </div>
                )
            }}
              actions={[
                // {
                //   icon: 'save',
                //   tooltip: 'Save Actor',
                //   onClick: (event, rowData) => {
                //     // Do save operation
                //   }
                // },
                {
                  icon: "add_box",
                  tooltip: "my tooltip",
                  position: "toolbar",
                  onClick: () => {
                    console.log("clicked");
                  }
                }
              ]}
              editable={{
                // isEditable: rowData => rowData.name === 'movieName,description,price,date,actor', // only name(a) rows would be editable
                // isEditHidden: rowData => rowData.name === 'x',
                // isDeletable: rowData => rowData.name === 'b', // only name(b) rows would be deletable,
                // isDeleteHidden: rowData => rowData.name === 'y',
                onBulkUpdate: changes => 
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            /* setData([...data, newData]); */
        
                            resolve();
                        },time );
                    }),
                onRowAddCancelled: rowData => console.log('Row adding cancelled'),
                onRowUpdateCancelled: rowData => console.log('Row editing cancelled'),
                // onRowAdd: newData =>
                //     new Promise((resolve, reject) => {
                //         setTimeout(() => {
                //           console.log(newData);
                //           MovieDataService.create(newData)
                //           .then(response => {
                          
                //             console.log(response.data);
                //           })
                //           .catch(e => {
                //             console.log(e);
                //           });
                          
                //           resolve();
                //         }, time);
                //     }),
                onRowUpdate: (newData, oldData,rowData,columnDef) =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataUpdate = [...data];
                            const index = oldData.tableData.id;
                            dataUpdate[index] = newData;
                            setData([...dataUpdate]);
                            console.log(newData,oldData,rowData,columnDef);
                            
                            MovieDataService.update(newData.id, {"data":newData}).then(res =>{
                              
                            
                              props.setMsgshow({title: "Record Updated", msg: "Record get Updated Correctly"});

                              
                            }).catch(error =>{
                              console.log(error);
                            });
        
                            resolve();
                        }, time);
                    }),
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                            const dataDelete = [...data];
                            const index = oldData.tableData.id;
                            dataDelete.splice(index, 1);
                            setData([...dataDelete]);
        
                            resolve();
                        }, time);
                    })
            }}
            //   cellEditable={{
            //     cellStyle: {},
            //     onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
            //         return new Promise((resolve, reject) => {
            //             MovieDataService.update(rowData.id, {"newValue":newValue, "columnDef": columnDef});
            //             //console.log('newValue: ' + newValue);
            //             setTimeout(resolve, 4000);
            //         });
            //     }
            // }}
              />
            </Col>
          </Row>
          </Container>
      </>
    )
  
};

