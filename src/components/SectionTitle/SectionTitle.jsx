
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:my-8 w-3/12 mx-auto text-center">
            <p className="text-yellow-600 mb-3">--- {subHeading} ---</p>
            <h3 className="text-4xl border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;