import Link from 'next/link';
import {useRouter} from 'next/router';
import {useTranslations} from 'next-intl';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';

export default function LocaleSwitcher() {
  const t = useTranslations('Locales');
  const {locale, locales, route} = useRouter();
  const [dropdownShowed, setDropdownShowed] = useState(false);

  const toggleDropdown = () => {
    setDropdownShowed(!dropdownShowed);
  }
  
  return (   
     <Dropdown show={dropdownShowed} className='d-flex'>
      <Dropdown.Toggle variant="" id="dropdown-basic" onClick={toggleDropdown} className="text-uppercase shadow-none">
        {locale}
      </Dropdown.Toggle>      

      <Dropdown.Menu  align='start'>
        {locales.map(locale => {
            return (   
                <Dropdown.ItemText key={locale} onClick={toggleDropdown}>
                    <Link  href={route} locale={locale}>
                    {t("localeName", {locale: locale})}
                    </Link>
                </Dropdown.ItemText>      
            ) 
        })}

      </Dropdown.Menu>
    </Dropdown>
  );
}