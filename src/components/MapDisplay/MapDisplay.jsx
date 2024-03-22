import "./MapDisplay.css";

function MapDisplay() {

    return (
        <div className="map-container">
            <iframe
                className="map-frame"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102341.78135704386!2d-4.4492669!3d36.718222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7259c44fdb212d%3A0x6025dc92c9ca32cf!2zTcOhbGFnYQ!5e0!3m2!1sen!2ses!4v1711115752184!5m2!1sen!2ses"
                width="500"
                height="250"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}

export default MapDisplay;


