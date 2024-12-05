import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'


import { Home } from "./pages/home";
import {Login} from "./pages/login";
import { ListLotes } from './pages/lotes/listLotes';
import { CreateLotes } from './pages/lotes/createLotes';
import { UpdateLotes } from './pages/lotes/updateLotes';
import {CreateRefeicoes} from './pages/refeicoes/createRefeicoes';
import {ListRefeicoes} from './pages/refeicoes/listRefeicoes';
import { ListRacoes } from './pages/racoes/listRacoes';
import { CreateRacoes } from './pages/racoes/createRacoes';
import { UpdateRacoes } from './pages/racoes/updateRacoes';
import {CreateVacinas} from './pages/vacinas/createVacinas';
import {ListVacinas} from './pages/vacinas/listVacinas';
const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/list-lotes" element={<ListLotes />} />
          <Route path="/create-lotes" element={<CreateLotes />} />
          <Route path="/update-lotes" element={<UpdateLotes />} />
          <Route path="/list-refeicoes" element={<ListRefeicoes />} />
          <Route path="/create-refeicoes" element={<CreateRefeicoes />} />
          <Route path="/list-racoes" element={<ListRacoes />} />
          <Route path="/create-racoes" element={<CreateRacoes />} />
          <Route path="/update-racoes" element={<UpdateRacoes />} />
          <Route path="/list-vacinas" element={<ListVacinas />} />
          <Route path="/create-vacinas" element={<CreateVacinas />} />
        </Routes>
      </Router>
  );
}

export default App;
