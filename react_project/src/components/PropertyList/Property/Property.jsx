import "./Property.css";
import PropertyImage from "./PropertyImage/PropertyImage";
import PropertyTypeLable from "./PropertyImage/PropertyTypeLabel";


const Property = ({
    image,
    bedrooms,
    bathrooms,
    address,
    rent,
    surface,
    available,
    date,
    type
}) => {
    return (
        <div
            className="property-card"
            style={{opacity: !available? "0.5" : "1"}}
        >
            <PropertyImage image={image}>
                <PropertyTypeLable type={type} />
            </PropertyImage>
            <div>Property Attributes.</div>
          
        </div>
    );
};

export default Property;
        