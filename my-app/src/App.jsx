import './App.css';
import Navbar from './components/Navbar/Navbar';
import Button from './components/button/button.jsx';
import ToggleButton from './components/toggleButton/toggleButton.jsx';
import DropdownButton from './components/DropdownButton/DropdownButton.jsx';
import SocialLinks from './components/SocialLinks/SocialLinks.jsx';

function App() {
    const dropdownOptions = ['Профиль', 'Настройки', 'Еще чота'];

    const handleDropdownSelect = (option) => {
        console.log('Выбрано:', option);
    };

    return (
        <div className="app">
            <Navbar />
            <h1>Добро пожаловать в Самару</h1>

            <Button color="green" size="large">Вход</Button>
            <Button color="green" size="large">Регистрация</Button>

            <ToggleButton />

            <SocialLinks />

            <DropdownButton
            options={dropdownOptions}
            onSelect={handleDropdownSelect}
            />
        </div>
    );
}

export default App;