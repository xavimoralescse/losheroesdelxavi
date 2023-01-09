import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import {HeroCard} from '../components';
import { getHeroesByName } from '../helpers';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {q =''} =queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.lenght === 0);
  const showError = (q.lenght === 0) && heroes.lenght===0;
  const { searchText, onInputChange}= useForm({
    searchText: q

 });

 const onSearchSubmit= (event)=>
 {
  event.preventDefault();
  //if(searchText.trim().lenght <=1) return;
  navigate (`?q=${searchText}`);
  
 }

  return (
    <>
      <h1>Search</h1>
      <hr/>
      
 <div className="row">
   
 <div className="col-5">
 <h4>Searching</h4>
 <hr/>
 <form onSubmit={onSearchSubmit}>
          <input
          type="text"
          placeholder="Busca un heroe"
          className="form-control"
          name="searchText"
          autoComplete="off"
          value={searchText}
          onChange={onInputChange}
          />
          <button
          className="btn btn-outline-primary mt-1">Search
          </button>

        </form>
        <div className="col-7">

        <h4>Results</h4>
        <hr/>
        </div>

        <div className="alert alert-primary" style={{display: showSearch?  '' :'none'}}>
        Search A Hero

        </div>
        <div className="alert alert-danger" style={{display: showError? '' :'none'}}>
         No Hero With <b>{q} </b>

        </div>
        {
          heroes.map(hero=>
            (
              <HeroCard key={hero.id} {...hero}/>
            )
            )
        }
        {
        /*(q==='')
        ?<div className="alert alert-primary">
        Search A Hero

        </div>
        :(heroes.length===0)&& <div className="alert alert-danger">
        No Hero With  <b>{q}</b>
         </div>*/
        

      }
        
    
       
       
       

      </div>

      </div>    
     
     
    </>
  )
}
