namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: TaskMyServiceSchema

	/// <exclude/>
	public class TaskMyServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public TaskMyServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public TaskMyServiceSchema(TaskMyServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7e0141c4-47a6-438b-859e-c0aa9ab012d8");
			Name = "TaskMyService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("6fd92e6b-da56-42d1-94c4-2c106821de1d");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,83,0,0,69,207,108,233,1,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7e0141c4-47a6-438b-859e-c0aa9ab012d8"));
		}

		#endregion

	}

	#endregion

}

