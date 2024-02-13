namespace Terrasoft.Configuration
{
    using System;
    using Terrasoft.Common;
    using Terrasoft.Core.Entities;
    using Terrasoft.Core.Entities.Events;
    [EntityEventListener(SchemaName = "TaskRealty")]
    public class RealtyEntityEventListener : BaseEntityEventListener
    {
        public override void OnSaving(object sender, EntityBeforeEventArgs e)
        {
            base.OnSaving(sender, e);
            Entity realty = (Entity) sender;
            decimal price = realty.GetTypedColumnValue<decimal>("TaskRealtyPriceUSD");
            if (price <= 0)
            {
                e.IsCanceled = true;

                string messageTemplate = new LocalizableString(realty.UserConnection.ResourceStorage,
                    "TaskRealtyEvents", "LocalizableStrings.PriceIsTooSmall.Value").ToString();

                string message = string.Format(messageTemplate, "0");
                throw new Exception(message);
            }
            decimal area = realty.GetTypedColumnValue<decimal>("TaskRealtyArea");
            if (area <= 0)
            {
                e.IsCanceled = true;

                string messageTemplate = new LocalizableString(realty.UserConnection.ResourceStorage,
                    "TaskRealtyEvents", "LocalizableStrings.AreaIsTooSmall.Value").ToString();

                string message = string.Format(messageTemplate, "0");
                throw new Exception(message);
            }
        }
    }
}