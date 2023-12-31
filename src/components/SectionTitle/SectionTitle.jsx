
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:my-8 w-3/4 lg:w-3/12 mx-auto text-center">
            <p className="text-yellow-600 mb-3">--- {subHeading} ---</p>
            <h3 className="text-xl lg:text-4xl border-y-4 py-2 lg:py-4 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;