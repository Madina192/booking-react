import React from 'react';

const Map = () => {
    return (
        <div className='map'>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d570.5160721984189!2d74.68116457994213!3d42.85597605230427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb6c95311ea6b%3A0x7023946675e4c5a9!2z0JzQtdC20LTRg9C90LDRgNC-0LTQvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQkNC70LAt0KLQvtC-!5e0!3m2!1sru!2skg!4v1671209651664!5m2!1sru!2skg"
                width="1000"
                height="600"
                style={{ border: "1px solid black" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
};

export default Map;