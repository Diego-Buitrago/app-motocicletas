import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//importar conponentes
import Login from './components/Login'
import Recuperar from './components/Recuperar_contrasena'

//Importar paginas
import Inicio from './pages/Inicio'
import Crear_usuario from './pages/Crear_usuario'
import Usuarios from './pages/Usuarios'
import Editar_usuario from './pages/Editar_usuario'
import Registrar_vehiculo from './pages/Registrar_vehiculo'
import Vehiculos from './pages/Vehiculos'
import Editar_vehiculo from './pages/Editar_vehiculo'
import Reparacion from './pages/Reparacion'
import Gestionar_reparacion from './pages/Gestionar_reparacion'
import Seguimiento from './pages/Seguimiento'
import Buscar_vehiculos from './pages/Buscar_vehiculos'
import Buscar_vehiculos_r from './pages/Buscar_vehiculos_r'
import Informacion from './pages/Informacion'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="/recuperar_contrasena" component={Recuperar}/>

        <Route path="/inicio" component={Inicio}/>
        <Route path="/crear_usuario" component={Crear_usuario}/>
        <Route path="/usuarios" component={Usuarios}/>
        <Route path="/editar_usuario" component={Editar_usuario}/>
        <Route path="/registrar_vehiculo" component={Registrar_vehiculo}/>
        <Route path="/vehiculos" component={Vehiculos}/>
        <Route path="/editar_vehiculo" component={Editar_vehiculo}/>
        <Route path="/reparacion" component={Reparacion}/>
        <Route path="/gestionar_reparacion" component={Gestionar_reparacion}/>
        <Route path="/seguimiento" component={Seguimiento}/>
        <Route path="/buscar_vehiculos" component={Buscar_vehiculos}/>
        <Route path="/buscar_vehiculos_r" component={Buscar_vehiculos_r}/>
        <Route path="/informacion" component={Informacion}/>
      </Switch>
    </Router>
  );
}

export default App;