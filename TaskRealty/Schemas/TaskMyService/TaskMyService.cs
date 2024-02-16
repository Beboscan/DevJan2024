namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using System;
    using System.Web.SessionState;
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class RealtyTaskService : BaseService, IReadOnlySessionState
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]

        public decimal GetAveragePriceByTypeIdOfferTypeId (string realtyTypeId, string realtyOfferTypeId)
        {
            if (string.IsNullOrEmpty(realtyTypeId) || string.IsNullOrEmpty(realtyOfferTypeId))
            {
                return -1;
            }
            Select select = new Select(UserConnection)
                .Column(Func.Avg("TaskRealtyPriceUSD"))
                .From("TaskRealty")
                .Where("TaskRealtyTypeId").IsEqual(Column.Parameter(new Guid(realtyTypeId)))
                .And("TaskRealtyOfferTypeId").IsEqual(Column.Parameter(new Guid(realtyOfferTypeId)))
                as Select;
            decimal result = select.ExecuteScalar<decimal>();
            return result;
        }

        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]

        public string GetExample()
        {
            return "OK!";
        }
    }
}