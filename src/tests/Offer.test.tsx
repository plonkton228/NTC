import { render, screen, fireEvent, act, findAllByTestId, getByTestId, findByTestId, waitFor } from "@testing-library/react";
import axios from "axios"
import Offer from "../modules/Lists/Offer";
import '@testing-library/jest-dom'
import { Link, MemoryRouter, Route, Routes, generatePath } from "react-router-dom";
import renderWithRouter from "./helpers/renderWithRouter";
import UiOffer from "../modules/UI/Offers/UiOffer";
// import UiOfferInner from "../../../modules/UI/UiOfferInner";
// import UiOfferInnerChild from "../modules/UI/UiOfferInnerChild";
import { click } from "@testing-library/user-event/dist/click";
import Routs from "../modules/Routing/Routs"
import App from "../App";
import userEvent from "@testing-library/user-event";
import TestList from "../modules/Lists/TestList";
import { link } from "fs";

// jest.mock('axios');
// const mockedAxios = axios as jest.Mocked<typeof axios>;


// describe('Offer Testing', ()=> {
//     const response = { data :[{
//       "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//       "name": "Danik",
//       "description": "some desc",
//       "assistanceTasks": [
//         "dfdfdf",
//         "dfgfgfgh3"
//       ],
//       "subAssistanceList": [
//         {
//           "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//           "name": "Prime",
//           "description": "Some desc",
//           "cost": 0,
//           "subAssistanceTasks": [
//             "dfdfdf",
//               "dfgfgfgh3"
//           ]
//         }
//       ]
//     }, 
//     {
//       "id": "3fa85f64-5717-5465-b3fk-2c963f66afa6",
//       "name": "NotDanik",
//       "description": "Some desc",
//       "assistanceTasks": [
//         "dfdfdf",
//         "dfgfgfgh3"
//       ],
//       "subAssistanceList": [
//         {
//           "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//           "name": "Prime1",
//           "description": "Some desc1",
//           "cost": 0,
//           "subAssistanceTasks": [
//             "dfdfdf",
//             "dfgfgfgh3"
//           ]
//         }
//       ]
//     }]
//   }
//   const response1 = {data : 
//     {
//       "id": "1",
//       "name": "Danik",
//       "description": "some desc",
//       "assistanceTasks": [
//         "dfdfdf",
//         "dfgfgfgh3"
//       ],
//       "subAssistanceList": [
//         {
//           "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//           "name": "Prime",
//           "description": "Some desc",
//           "cost": 0,
//           "subAssistanceTasks": [
//             "dfdfdf",
//               "dfgfgfgh3"
//           ]
//         }
//       ]
//     }, 
//   }
//   const response2 = {data :  {
//     "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "name": "Prime",
//     "description": "Some desc",
//     "cost": 0,
//     "subAssistanceTasks": [
//       "dfdfdf",
//         "dfgfgfgh3"
//     ]
//   }}
//   test('Rout test', async ()=> {
//      mockedAxios.get.mockResolvedValue(response);
//     render(<MemoryRouter initialEntries={['/']}>
//       <Routes>
//         <Route path="/" element = {<Offer/>}/>
//         <Route path="/offer/:id" element = {<UiOfferInner/>}/>
//       </Routes>
//     </MemoryRouter>)
   
//     expect(window.location.pathname).toBe('/');
//     await waitFor(() => {
//       const links = screen.getAllByTestId('buttonGetOfferInner');
//       const link = links[0]; 
      
//       fireEvent.click(link);
      
//       expect(window.location.pathname).toBe('/offer/1');
//       expect(screen.getByTestId('offer')).toBeInTheDocument();
//     });
   



//   })
  // test('Test Offers', async ()=> {
  //     mockedAxios.get.mockResolvedValue(response);
  //       render( <MemoryRouter initialEntries={['/']}>
  //         <Routes>
  //          <Route path="/" element = {<Offer/>}/>
  //          <Route path="/test" element = {<TestList/>}/>
  //         </Routes>
           
  //       </MemoryRouter>)
       
     
  //     const OffersArr = await screen.findAllByTestId('Offerdiv')
  //     expect(OffersArr[0]).toBeInTheDocument();
  //     const btn =  screen.getAllByTestId('LinkInner');
      
  //       await userEvent.click(btn[0])
  //      const disTest = await screen.findByTestId('TestListDiv')
     

  // })

  // test('Test OfferInner', async ()=> {
  //   await mockedAxios.get.mockResolvedValue(response1);
  //    render(<MemoryRouter>
  //     <UiOfferInner/>
  //    </MemoryRouter>);   
  //    expect(mockedAxios.get).toBeCalledTimes(1);
  //    expect( screen.getByTestId('divTest')).toBeInTheDocument();
  //    const divassistanceTasks = await screen.findAllByTestId('assistanceTasks');
  //    const divsubAssistanceList = await screen.findAllByTestId('subAssistanceList');
  //    expect(divassistanceTasks[0]).toBeInTheDocument();
  //    expect(divsubAssistanceList[0]).toBeInTheDocument();
     


  // })

  // test('Test OfferInnerChild' ,async ()=> {
  //      mockedAxios.get.mockResolvedValue(response2)
  //    render(<MemoryRouter>
  //     <UiOfferInnerChild/>
  //    </MemoryRouter>)
  //    expect(mockedAxios.get).toBeCalledTimes(1);
  //    const  subAssistanceTasks = await screen.findAllByTestId('subAssistanceTasks')
  //    expect(subAssistanceTasks[0]).toBeInTheDocument();
 

  // })
// })