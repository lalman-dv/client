
import ClassicTemplate form './template/ClassicTemplate'
import ModernTemplate form './template/ModernTemplate'
import MinimalTemplate form './template/MinimalTemplate'
import MinimalImageTemplate form './template/MinimalImageTemplate'
const ResumePreview = ({ data, template, accent_color, classes = "" }) => {

  const renderTemplate =()=>{
    switch(template){
      case "modern":
      return <ModernTemplate data={data} accent_color />
      
      break;
    }
  }
  return (
    <div className="w-full bg-gray-100">
      <div
        id="resume-preview"
        className={
          `border border-gray-200 print:shadow-none print:border-none` + classes
        }
      >

      </div>
    </div>
  );
};

export default ResumePreview;
